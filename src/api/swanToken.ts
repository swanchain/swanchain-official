import { request } from '@/utils/request'

export function getGithubToken() {
    return request({
        headers: {},
        url: 'https://github.com/swanchain/docs/blob/main/getting-started/protocol-stack/token/README.md',
        method: 'get'
    })
}