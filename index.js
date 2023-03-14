require('dotenv').config();
const chain = process.env.CHAIN;
console.log(chain);
const config = require('./config/config');
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(config[chain].rpc);
const backAddress = config.backAddress;

const subWalletKey = [
    '0x3e32r324t',
    '0xf43t43t43t',
    '0xvxfewf23r'
]


async function collectBNB() {
    return new Promise(async (res, rej) => {
        for (const key of subWalletKey) {
            const subWallet = new ethers.Wallet(key, provider);
            const balance = await provider.getBalance(subWallet.address);
            if (ethers.utils.formatEther(balance) > 0) {
                console.log(subWallet.address, ethers.utils.formatEther(balance))
                const gas = ethers.BigNumber.from(21000 * ((process.env.CHAIN == 'bsctest' ? 10 : 5) * 10 ** 9));
                res(await (await subWallet.sendTransaction({ to: backAddress, value: balance.sub(gas) })).wait());
            } else {
                console.log(subWallet.address, '暂无余额');
            }
        }
    })
};

setInterval(async () => {
    await collectBNB();
}, 10000);