import { Building2, LayoutGrid } from "lucide-react";
import React from "react";
import { LuHouse } from "react-icons/lu";

const Portfolio = ({
  marginleft = "auto",
  marginright = "auto",
  margintop = 0,
  marginbotton = 0,
  width = 85,
  backgroundColor = "#fff",
  backgroundImage = "./assets/Image/about-image.jpg",
  AboutImage = "./assets/Image/about-image.jpg",
  fontsize = "50",
  fontsizeContent = "18",
  AboutTitleSize = "42",
  AboutTitleContent = "18",


    // ⭐ NEW SERVICES PROPS
  ServicesTitle = "OUR SERVICES",
  ServicesTitleSize = "42",
  ServicesTitleColor = "#000",
  ServicesContentSize = "18",
  ServicesBg = "#fff",
  SerTitleSize = "20",

}) => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `url(${backgroundImage})`,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          // backgroundColor: backgroundColor,
          // opacity: 0.6,
        }}>
        <div
          style={{
            width: `${width}%`,
            margin: `${margintop}px ${marginright} ${marginbotton}px ${marginleft}`,
          }}>
          <h2
            style={{
              fontSize: `${fontsize}px`,
              textAlign: "center",
            }}>
            Title
          </h2>
          <p
            style={{
              fontSize: `${fontsizeContent}px`,
              textAlign: "center",
            }}>
            Content
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: backgroundColor,
        }}>
        <div
          style={{
            width: `${width}%`,
            margin: `${margintop}px ${marginright} ${marginbotton}px ${marginleft}`,
          }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              alignItems: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}>
            <div>
              <h2
                style={{
                  fontSize: `${AboutTitleSize}px`,
                  fontWeight: "700",
                }}>
                Portfolio Section
              </h2>
              <p
                style={{
                  fontSize: `${AboutTitleContent}px`,
                  fontWeight: "500",
                }}>
                This is the portfolio section content.
              </p>
            </div>

            <div>
              <img
                src={AboutImage}
                alt="About Image"
                style={{
                  borderRadius: "6px",
                }}></img>
            </div>
          </div>
        </div>
      </div>


{/* ⭐ OUR SERVICES SECTION ⭐ */}
  <div
        style={{
          backgroundColor: ServicesBg,
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            width: `${width}%`,
            margin: `${margintop}px ${marginright} ${marginbotton}px ${marginleft}`,
          }}
        >
          {/* ⭐ TITLE comes from props */}
          <h2
            style={{
              textAlign: "center",
              fontSize: `${ServicesTitleSize}px`,
              color: ServicesTitleColor,
              fontWeight: "700",
              marginBottom: "40px",
            }}
          >
        OUR SERVICES
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "30px",
            }}
          >
            {/* CARD 1 */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0px 0px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: `${ServicesTitleSize}px`,
                  marginBottom: "20px",
                  color: "#e0b36c",
                }}
              >
                <Building2  />
              </div>
              <h3 style={{ fontSize: `${SerTitleSize}px`, fontWeight: "700", paddingBottom: "10px", }}>
                URBAN DESIGN
              </h3>
              <p
                style={{
                  fontSize: `${ServicesContentSize}px`,
                  lineHeight: "28px",
                }}
              >
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
            </div>

            {/* CARD 2 */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0px 0px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: `${ServicesTitleSize}px`,
                  marginBottom: "20px",
                  color: "#e0b36c",
                }}
              >
              <LayoutGrid />
              </div>
              <h3 style={{ fontSize: `${SerTitleSize}px`, fontWeight: "700", paddingBottom: "10px", }}>
                ARCHITECTURE
              </h3>
              <p
                style={{
                  fontSize: `${ServicesContentSize}px`,
                  lineHeight: "28px",
                }}
              >
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
            </div>

            {/* CARD 3 */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0px 0px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: `${ServicesTitleSize}px`,
                  marginBottom: "20px",
                  color: "#e0b36c",
                }}
              >
             <LuHouse />

              </div>
              <h3 style={{ fontSize: `${SerTitleSize}px`, fontWeight: "700", paddingBottom: "10px", }}>
                INTERIOR
              </h3>
              <p
                style={{
                  fontSize: `${ServicesContentSize}px`,
                  lineHeight: "28px",
                 
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Portfolio;
