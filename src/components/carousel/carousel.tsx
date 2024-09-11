import { Carousel, Image } from "antd";
import { Content } from "antd/es/layout/layout";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselApp = (props:{img: string[]}) => {
const {img}=props
  return (
    <Content>
      <Carousel arrows infinite={false}>
        {img.map((v) => {
          return (
            <div>
              <div style={contentStyle}>
                <Image src={v} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </Content>
  );
};
export default CarouselApp;
