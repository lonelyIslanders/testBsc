# 功能
可以一直查询你的钱包的余额，若有则全部转出至一个总钱包去，支持测试网和主网，方便起见，在config设置即可</br>
(是不是觉得鸟用没有)，你可以多创建一些钱包，并把私钥填写在subWalletKey数组中，程序会不停地检查这些钱包余额</br>
# 拓展
主要用于领取<strong>[BSC水龙头](https://testnet.bnbchain.org/faucet-smart)</strong>测试币，一IP、一地址、一浏览器指纹、每天只能领取0.1个，这不操蛋吗，虽然可以通过某些方法绕过，但我们选择笨方法，也是最有效的方法 ———— 多IP、多地址、不同浏览器领取</br>
每次粘贴subWalletKey数组中对应私钥的地址去领取，程序则会回集到总钱包去，开发测试用这个总钱包就行，每天领取用不同的子地址去领取。</br>
完事！