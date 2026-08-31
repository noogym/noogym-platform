import { UnauthorizedException } from "@nestjs/common";
import { ApiKeyGuard } from "./api-key.guard";

describe("ApiKeyGuard", () => {
  const config = {
    get: jest.fn((key: string) => {
      if (key === "INTELLIGENCE_API_KEY") return "admin-key";
      if (key === "INTELLIGENCE_SUBMISSION_API_KEY") return "submission-key";
      return undefined;
    }),
  };

  const guard = new ApiKeyGuard(config as never);

  function context(path: string, key?: string) {
    return {
      switchToHttp: () => ({
        getRequest: () => ({
          path,
          header: (name: string) => (name === "x-api-key" ? key : undefined),
        }),
      }),
    } as never;
  }

  it("allows health without a key", () => {
    expect(guard.canActivate(context("/health"))).toBe(true);
  });

  it("allows submission key only for public event submissions", () => {
    expect(guard.canActivate(context("/submissions/events", "submission-key"))).toBe(true);
    expect(() => guard.canActivate(context("/dashboard", "submission-key"))).toThrow(UnauthorizedException);
  });
});
