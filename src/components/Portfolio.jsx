import styled from "styled-components";

const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 1px solid black;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const Portfolio = () => {
  return (
    <div>
      <div>
        <h2>Leetbeck Portfolio</h2>
        <ResponsiveImage
          src="/images/fibo.webp"
          alt="fibo art style" />
        <p>Trying some fibo style art</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/t-shirt-style.webp"
          alt="t shirt style"
        />
        <p>Some t-shirt style idea</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/duffy-girl.webp"
          alt="duffy girl"
        />
        <p>duffy duck female</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/nice-figure.webp"
          alt="nice figure"
        />
        <p>nice figure</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/one-of-the-firsts.webp"
          alt="one-of-the-firsts"
        />
        <p>one-of-the-firsts</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/sketch-study.webp"
          alt="sketch-study"
        />
        <p>sketch-study</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/sketch3.webp"
          alt="some sketch3"
        />
        <p>Some sketch</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/skull-study.webp"
          alt="skull-study"
        />
        <p>Skull study</p>
        <hr />
      </div>
      <div>
        <ResponsiveImage
          src="/images/some-concept.webp"
          alt="some-concept"
        />
        <p>Some concept art</p>
        <hr />
      </div>
    </div>
  );
};
