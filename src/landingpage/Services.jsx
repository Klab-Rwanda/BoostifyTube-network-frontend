
import styled from "styled-components";
import service1 from "../assets/picture/assets/service1.png";
import service2 from "../assets/picture/assets/b-icon.png";
import service3 from "../assets/picture/assets/service3.png";
import service4 from "../assets/picture/assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Watch & Earn",
      subTitle: "Get Payed through our application Just By Watching Video.",
    },
    {
      icon: service2,
      title: "Boost Your Youtube Channel ",
      subTitle: "Find Youtube Views,Like and Subscription ",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Explore the Best Content",
      subTitle:
        "Stream Our Latest HD Vdeo For Free.",
    },
  ];
  return (
    <Section
      id="services"
      style={{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div className="services-col">
        <div>
          <h2 style={{ color: "#191943" }}>Our Service</h2>
        </div>
        <div className="services-row">
          {data.map((service, index) => {
            return (
              <div className="service" style={{ width: "200px" }} key={index}>
                <div className="icon">
                  <img src={service.icon} style={{color:"blue"}} alt="Connection failed" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .services-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .services-row {
    display: flex;
    flex-direction: row;
    margin-top:2rem;

    gap: 5rem;
  }
  
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
