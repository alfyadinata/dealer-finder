import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import provincesData from "mock/provinces.json";

const App = () => {
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    getProvinces();
  }, []);
  const getProvinces = () => {
    const newVal = [];
    provincesData.map((item) => {
      newVal.push({ label: item.name, value: item.id });
    });
    setProvinces(newVal);
    // try {
    //   axios
    //     .get("https://mitsubishi.trinix.id/api/frontend/get-provinces")
    //     .then((data) => {});
    // } catch (error) {
    //   console.log("err get prov", error);
    // }
  };
  return (
    <div>
      {/* header */}
      <div
        style={{
          position: "fixed",
          left: "0%",
          right: "0%",
          top: "0%",
          bottom: "4.76%",
          background: "#000000",
          height: 50,
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "1.67%",
            right: "1.67%",
            top: "14.29%",
            bottom: "20.24%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "0px",
              gap: "40px",
              position: "absolute",
              left: "21.18%",
              top: "19.05%",
              bottom: "23.81%",
            }}
          >
            <img
              src={require("assets/img/euro.png")}
              style={{
                width: "120px",
                height: "48px",
                background: "url(Euro4-2@3x.png)",
                flex: "none",
                order: "0",
                flexGrow: "0",
              }}
            />
            {[
              { label: "About Us", child: true },
              { label: "Explore Cars", child: true },
              { label: "Promo", child: false },
              { label: "News & Events", child: true },
            ].map((item) => {
              return (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "6px",
                    height: "26px",
                    flex: "none",
                    order: "1",
                    flexGrow: "0",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      height: "26px",
                      fontFamily: "'MMC'",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "160%",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      flex: "none",
                      order: "0",
                      flexGrow: "0",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.child && (
                    <img
                      src={require("assets/icons/Chevron/Down.png")}
                      style={{
                        width: "20px",
                        height: "20px",
                        flex: "none",
                        order: "1",
                        flexGrow: "0",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* slider */}
      <div
        style={{
          width: "1439px",
          height: "408px",
          left: "1px",
          top: "50px",
          background: `url(${require("assets/img/office.png")})`,
        }}
      ></div>
      {/* Find dealer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          position: "absolute",
          width: "1440px",
          height: "300px",
          left: "0px",
          top: "352px",
        }}
      >
        {/* wrapper */}
        <div
          style={{
            width: "1082px",
            height: "78px",
            flex: "none",
            order: "0",
            flexGrow: "0",
          }}
        >
          <h4
            style={{
              position: "absolute",
              width: "350px",
              height: "62px",
              left: "179px",
              top: "30px",
              fontFamily: "'MMC'",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "48px",
              lineHeight: "130%",
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
              color: "#000000",
            }}
          >
            Find Dealer
          </h4>
          <p
            style={{
              position: "absolute",
              width: "522px",
              height: "78px",
              left: "739px",
              top: "111px",
              fontFamily: "'MMC'",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "160%",
              color: "#000000",
            }}
          >
            Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda
            untuk mendapatkan pelayanan terbaik terkait dengan kendaraan dari
            Mitsubishi Motors Indonesia.
          </p>
          {/* search bar wrapper */}
          <div
            style={{
              position: "absolute",
              left: "12.43%",
              right: "48.68%",
              top: "54.32%",
              bottom: "71.17%",
            }}
          >
            <p
              style={{
                left: "12.43%",
                right: "58.35%",
                top: "24.32%",
                bottom: "74.63%",
                fontFamily: "'MMC'",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "160%",
                display: "flex",
                alignItems: "center",
                color: "#9B9B9B",
              }}
            >
              Discover the nearest dealership in your area
            </p>
            <Select
              options={provinces}
              styles={{ width: 200 }}
              placeholder="Pilih Lokasi Terdekat"
            />
          </div>
        </div>
      </div>
      {/* List wrapper */}
      <div
        style={{
          marginTop: "20%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          paddingLeft: 40,
          paddingRight: 40,
          marginBottom: 30,
          alignContent: "center",
          gap: "15px",
        }}
      >
        {/* List item */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            style={{
              background: "#F1F1F1",
              borderRadius: "20px",
            }}
          >
            {/* Wrapper in List Item */}
            <div
              style={{
                width: "393.67px",
                height: "225.08px",
                padding: 25,
              }}
            >
              <img
                alt="location"
                src={require("assets/icons/Location/Location.png")}
              />
              <p
                style={{
                  left: "11.72%",
                  right: "69.46%",
                  top: "40.75%",
                  bottom: "58.21%",
                  fontFamily: "'MMC'",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "160%",
                  color: "#000000",
                }}
              >
                Srikandi Mampang
              </p>
              <p
                style={{
                  left: "11.66%",
                  right: "69.53%",
                  top: "42.08%",
                  bottom: "56.22%",
                  fontFamily: "'MMC'",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "160%",
                  display: "flex",
                  alignItems: "center",
                  color: "#4C4C4C",
                }}
              >
                Jl. Mampang Prapatan No. 21-23, Jakarta Selatan
              </p>
              <p
                style={{
                  left: "11.43%",
                  right: "73.5%",
                  top: "45.16%",
                  bottom: "54.22%",
                  fontFamily: "'MMC'",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "160%",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  color: "#4C4C4C",
                  opacity: "0.5",
                }}
              >
                Sales • Service • Sparepart
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Action buttton */}
      <center>
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "15px 20px",
            gap: "10px",
            position: "absolute",
            height: "48px",
            left: "656px",
            background: "#000000",
          }}
        >
          <span
            style={{
              fontFamily: "'MMC'",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "18px",
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Load More
          </span>
        </button>
        {/* Banner section */}
        <img
          alt="banner"
          src={require("assets/img/banner.png")}
          style={{ marginTop: 100, marginBottom: 100 }}
        />
      </center>
      {/* footer section */}
      <center>
        <img src={require("assets/img/footer.png")} alt="footer" />
      </center>
      <img src={require("assets/img/widget.png")} alt="footer" />
      <div style={{ marginTop: 100 }} />
    </div>
  );
};

export default App;
