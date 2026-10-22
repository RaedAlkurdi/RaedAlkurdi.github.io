import { afterEach, describe, expect, it, vi } from "vitest";
import { sendContact } from "@/lib/contact";

afterEach(() => vi.unstubAllGlobals());

describe("Web3Forms delivery", () => {
  it("sends the visitor's details to Web3Forms with their reply address", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetchMock);
    await sendContact({ name: " Visitor ", email: "visitor@example.com", message: "Hello Raed" });
    const [url, request] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(JSON.parse(request.body)).toMatchObject({ name: "Visitor", email: "visitor@example.com", replyto: "visitor@example.com", message: "Hello Raed" });
  });
  it("does not claim success when Web3Forms rejects the message", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: false }) }));
    await expect(sendContact({ name: "Visitor", email: "visitor@example.com", message: "Hello" })).rejects.toThrow();
  });
  it("does not send invalid visitor input", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    await expect(sendContact({ name: " ", email: "invalid", message: " " })).rejects.toThrow();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});