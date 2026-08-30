import { Injectable } from "@nestjs/common";

@Injectable()
export class NormalizationService {
  normalize(input: { title: string; rawText: string; rawHtml?: string | null }) {
    const source = input.rawHtml ? this.htmlToText(input.rawHtml) : input.rawText;
    const cleanText = this.stripNoise(source);

    return {
      title: input.title.trim(),
      slug: this.slugify(input.title),
      cleanText,
      summary: this.summarize(cleanText),
    };
  }

  htmlToText(html: string) {
    return html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<(nav|footer|header|aside)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&");
  }

  stripNoise(text: string) {
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .filter((line) => !/^(menu|publicidade|cookie|subscrever|copyright)$/i.test(line))
      .join("\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();
  }

  slugify(value: string) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  private summarize(text: string) {
    const firstSentence = text.split(/(?<=[.!?])\s+/)[0];
    return firstSentence.length > 220 ? `${firstSentence.slice(0, 217)}...` : firstSentence;
  }
}
