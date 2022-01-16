import React from "react";

// Components
import Layout from "components/Layout";

const NotFoundPage = () => {
  return (
    <Layout footer={false}>
      <section className="not-found">
        <div className="not-found__img-wrapper">
          <img
            src="https://media1.giphy.com/media/YyKPbc5OOTSQE/giphy.gif?cid=ecf05e47mw4z8dh1m2szzvjblnrxs8g9vsnjgfgg1jm74m3x&rid=giphy.gif&ct=g"
            alt={"video of the number 404 glitching"}
          />
        </div>
        <p>It seems you went somewhere where the internet can't find you! :(</p>
        <p>
          This could be because the page has been moved or deleted all together
        </p>
        <p>
          If you have questions you can get in contact contact@rubennijhuis.com
        </p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
