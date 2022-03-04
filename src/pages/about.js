import * as s from '../styles/style';

export const AboutPage = () => {
    return(
        <>
        <s.Container>
            <s.TextTitleLarge c="white">Star Coin</s.TextTitleLarge>
            <s.TextTitle c="#ffe26a">a rinkeby based cryptocurrency</s.TextTitle>
        </s.Container>
        <s.Container>
            <s.TextTitle c="white">What is Star Coin?</s.TextTitle>
            <s.Text c="#ffe26a">
                Star Coin is a test cryptocurrency that operates within the Rinkeby test Network. 
            </s.Text> 
            <s.Text c="#ffe26a">
                Built using the ERC20 standard, Star Coin is free to trade for test Ether via the Star Coin Exchange.
            </s.Text>
        </s.Container>
        <s.Container>
            <s.TextTitle c="white">Star Coin Exchange</s.TextTitle>
            <s.Text c="#ffe26a">
                The Star Coin Exchange allows you to swap test Ether for Star Coins and vice versa. 
            </s.Text> 
            <s.Text c="#ffe26a">
                <s.TextLink to='/exchange'>Click here</s.TextLink> to head to the exchange now, or keep scrollling for a step by step guide! 
            </s.Text> 
        </s.Container>
        <s.Container>
            <s.TextTitle c="white">How to get Star Coin</s.TextTitle>
            <s.Text c="#ffe26a">
                1. Make sure that you have <s.TextA target={"_blank"} href={"https://metamask.io/"}>MetaMask</s.TextA> installed. If you are on a mobile device, you will need to use the MetaMask browser.
            </s.Text> 
            <s.Text c="#ffe26a">
                2. Switch to the Rinkeby Test Network on MetaMask.
            </s.Text> 
            <s.Text c="#ffe26a">
                3. You will need test Eth to swap for Star Coin, you can get Test Eth <s.TextA target={"_blank"} href={"https://faucet.rinkeby.io/"} >here</s.TextA>
            </s.Text> 
            <s.Text c="#ffe26a">
                4. Head to the <s.TextLink to={"exchange"}>Star Coin Exchange</s.TextLink> and get your Star Coins!
            </s.Text> 
        </s.Container>
        </>
    );
}