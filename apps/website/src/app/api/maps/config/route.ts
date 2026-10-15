import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";

export const dynamic = "force-dynamic";

function readLocalEnvValue(name: string) {
  let currentDir = process.cwd();

  for (let depth = 0; depth < 5; depth += 1) {
    const envPath = join(currentDir, ".env");

    if (existsSync(envPath)) {
      const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
      const match = lines.find((line) => line.trim().startsWith(`${name}=`));

      if (match) {
        return match.slice(name.length + 1).trim().replace(/^["']|["']$/g, "");
      }
    }

    const nextDir = dirname(currentDir);
    if (nextDir === currentDir) break;
    currentDir = nextDir;
  }

  return "";
}

export function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || readLocalEnvValue("GOOGLE_MAPS_API_KEY");

  if (!apiKey) {
    return Response.json({
      configured: false,
      apiKey: "",
    });
  }

  return Response.json({
    configured: true,
    apiKey,
  });
}
