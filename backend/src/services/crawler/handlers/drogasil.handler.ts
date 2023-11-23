import { CrawlerHandler, IProduct } from "./abstract.handler";
import * as cheerio from "cheerio";
import axios from "axios";

export class DrogasilHandler extends CrawlerHandler {
    static readonly host = "drogasil.com.br";

    async handle(url: string): Promise<IProduct | false> {
        const response = await axios.get(url);

        if (response.status !== 200) {
            return false;
        }

        const body = response.data;
        const $ = cheerio.load(body);

        const name = $("h1").text();
        const imageUrl = $("link[rel='icon'][sizes='150x150']").attr('href');
        const image = imageUrl?.split("?")[0] ?? 'https://via.placeholder.com/300x300';
        const description = $("div.product-attributes").text();
        const price = $(".price").text().replace("R$", "").trim();
        const barcode = $("table tbody tr").map((i, element) => {
            if ($(element).find("th").text() === 'EAN') {
                return $(element).find("td").text();
            }

            return null;
        }).get(0);

        return {
            name,
            image,
            description,
            price: Number(price),
            barcode,
        }
    }
}