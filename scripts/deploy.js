async function main(){
    const MyNFT = await ethers.getContractFactory("MyNFT")
    
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy()
    console.log("Contract Berhasil dibuat, jangan lu[pa di simpan, addressnya :", myNFT.address)

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

// Contract Berhasil dibuat, jangan lu[pa di simpan, addressnya : 0xADFA8B289f5BAF073F1FbE281F17d5dF0ACeE474