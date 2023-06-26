import {ChangeEvent, ChangeEventHandler} from "react";
import {isArray} from "util";
import {Array} from "io-ts";
import {saveIpfs} from "@/httpRequest/ClientRequest";

function Home() {

    // 将文件保存至区块链
    const setFile = (file: ChangeEvent<HTMLInputElement>) => {
        if (file.target.files === null) return;
        console.log(file.target.files[0]);
        const form = new FormData();
        form.append('file', file.target.files[0]);
        saveIpfs(form).then(res => {
            console.log(res);
        })
    }

    return (
        <div>
        <h1>Home</h1>
            <input type="file" onChange={setFile}/>
        </div>
    );
}


export default Home;
