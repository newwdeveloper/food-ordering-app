const About = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <h1
        style={{ backgroundColor: "white", color: "#343a40", height: "screen" }}
      >
        Welcome to FastFood!
      </h1>
      <h2 style={{ backgroundColor: "white", color: "#343a40" }}>
        Your Favorite Fast Food, Delivered Fast!
      </h2>
      <p style={{ fontSize: "18px", color: "#6c757d", lineHeight: "1.6" }}>
        At <strong>FastFood</strong>, we believe that good food shouldn't make
        you wait. Our goal is to bring your favorite meals straight to your door
        in record time. Whether you're craving a cheesy pizza, a juicy burger,
        or something fresh and healthy, we've got you covered!
      </p>
      <p style={{ fontSize: "18px", color: "#6c757d", lineHeight: "1.6" }}>
        We're more than just a delivery service – we're a team of food lovers,
        chefs, and delivery experts, all working together to ensure your meal
        arrives hot, fresh, and on time. With <strong>FastBite</strong>, you're
        not just ordering food – you're ordering an experience.
      </p>
      <h3 style={{ backgroundColor: "white", color: "#343a40" }}>
        Why Choose FastFood?
      </h3>
      <ul
        style={{
          textAlign: "left",
          color: "#6c757d",
          listStyleType: "none",
          paddingLeft: "0",
        }}
      >
        <li>🍔 Quick delivery, right to your door.</li>
        <li>🍕 A wide variety of mouthwatering meals.</li>
        <li>🥗 Fresh, high-quality ingredients for every dish.</li>
        <li>
          🌟 Friendly customer service to assist you every step of the way.
        </li>
      </ul>
      <p style={{ fontSize: "18px", color: "#6c757d" }}>
        Join the FastFood family today – and let's make your hunger a thing of
        the past!
      </p>
    </div>
  );
};

export default About;
