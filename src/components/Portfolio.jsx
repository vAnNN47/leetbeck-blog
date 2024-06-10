import styled from "styled-components"

const ResponsiveImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    border: 1px solid black;

    @media(min-width: 768px){
        width: 80%
    }

    @media (min-width: 1024px){
        width: 60%;
    }
`

export const Portfolio = () => {
    return (
        <div>
            <div>
                <h2>Leetbeck Portfolio - test</h2>
                <ResponsiveImage
                    src="/images/fibo.webp"
                    alt="fibo art style"
                />
                <p>Trying some fibo style art</p>
                <hr />
            </div>
            <div>
                <h2>Leetbeck Portfolio</h2>
                <ResponsiveImage
                    src="/images/t-shirt-style.webp"
                    alt="fibo art style"
                />
                <p>Some t-shirt style idea</p>
                <hr />
            </div>
        </div>
    )
}