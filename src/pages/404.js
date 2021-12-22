import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

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
        <p>It seems the page you were looking for can't be found</p>
        <p>This could because it has been moved or been deleted all together</p>
        <p>
          If you have questions you can get in contact{" "}
          <Link to={"/contact"}>here</Link>
        </p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
