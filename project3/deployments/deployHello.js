
const main = async () => {

    const [deployer] = await ethers.getSigners();
    console.log(`Address deploying the contract --> ${deployer.address}`);

    const helloFactory = await ethers.getContractFactory("Hello");
    const contract = await helloFactory.deploy();

    console.log(`Hello contract address --> ${contract.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });