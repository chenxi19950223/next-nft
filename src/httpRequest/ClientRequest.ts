import request from "@/utils/request";
import HTTPURL from "@/httpRequest/HTTPURL";

// 保存文件到链上
export function saveIpfs(form: FormData) {
    return request({
        url: HTTPURL.pinata,
        method: 'post',
        headers: {
            'pinata_api_key': `2dc9de284e2cc3e588bc`,
            'pinata_secret_api_key': `90d7778c1e9e3929bdd3547031110997a04f9f451e98e4b8989d0f051bddebfb`,
            // "Content-Type": "multipart/form-data"
        },
        data: form
    })
}
