import request from "@/utils/request";
import HTTPURL from "@/httpRequest/HTTPURL";
import {AxiosPromise} from "axios";

// 保存文件到链上
export function saveIpfs(form: FormData): AxiosPromise<any> {
    return request({
        url: HTTPURL.pinata,
        method: 'post',
        headers: {
            'pinata_api_key': process.env.PINATA_API_KEY,
            'pinata_secret_api_key': process.env.PINATA_API_SECRET_KEY,
            // "Content-Type": "multipart/form-data"
        },
        data: form
    })
}
