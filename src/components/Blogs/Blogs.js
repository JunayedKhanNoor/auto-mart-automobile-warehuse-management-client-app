import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center my-4">Question and answer...</h1>
      <div
        style={{
          maxWidth: "800px",
          border: " 2px solid #0f172a",
          borderRadius: "50px",
        }}
        className="mx-auto p-5 mb-3"
        data-aos="fade-up"
      >
        <h2 style={{ color: "#F05454" }}>
          Difference between Javascript and Node JS :
          <hr />
        </h2>
        <h4 style={{ color: "#0F3460" }}>
          JavaScript : <hr />
        </h4>
        <p style={{ wordSpacing: "2px" }}>
          Javascript is a Scripting language. It is mostly abbreviated as JS. It
          can be said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance. It is the upgraded
          version of ECMA script that uses Chrome's V8 engine written in C++.
        </p>
        <h4 style={{ color: "#0F3460" }}>NodeJS : <hr /> </h4>
        <p style={{ wordSpacing: "2px" }}>
          NodeJS is a cross-platform and open source Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development. Nodejs is
          written in C, C++ and Javascript.{" "}
        </p>
      </div>
      <div
        style={{
          maxWidth: "800px",
          border: " 2px solid #0f172a",
          borderRadius: "50px",
        }}
        className="mx-auto p-5 mb-3"
        data-aos="fade-up"
      >
        <h2 style={{ color: "#F05454" }}>
          When should you use nodejs and when should you use mongodb:
          <hr />
        </h2>
        <h4 style={{ color: "#0F3460" }}>When should you use nodejs :</h4>
        <p style={{ wordSpacing: "2px" }}>
          If you wish to develop a real-time web application Node.js is the best
          choice. One of the most significant advantages of Node.js development
          is that it can be used to create a wide range of business solutions.
          With Node.js-based business solutions, you can outperform your
          competitors.Node.js is also a great choice for constructing an API
          application with both relational and non-relational databases.
        </p>
        <li>API Application</li>
        <li>Real-time applications</li>
        <li>Micro services</li>
        <h4 style={{ color: "#0F3460" }}>
          When should you use mongodb : <hr />
        </h4>
        <p>
          MongoDB is basically an Open Source cross platform document oriented
          DB program, often classified as NoSQL DB program. What it means is
          that instead of the traditional table based RDBMS, the emphasis is on
          JSON with dynamic schemas. So when should this be used? High Write
          Load- If the need is to load rows of data without much security
          issues, you can be using it. However do avoid using with transactions,
          unless there is security implemented. High Availability in Cloud- It
          is easier to set up a series of master-slave servers and recovery from
          failure is faster too. Scalability- RDBMS has it's own limitations
          when it comes to scalability, especially the performance which often
          tends to degrade. MongoDB comes with a built in solution for partition
          and database sharding.
        </p>
      </div>
      <div
        style={{
          maxWidth: "800px",
          border: " 2px solid #0f172a",
          borderRadius: "50px",
        }}
        className="mx-auto p-5 mb-3"
        data-aos="fade-up"
      >
        <h2 style={{ color: "#F05454" }}>
          Differences between SQL and NoSQL databases:
          <hr />
        </h2>
        <li>
          {" "}
          SQL databases are relational, NoSQL databases are non-relational.
        </li>
        <li>
          SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
        </li>
        <li>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </li>
        <li>
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores.
        </li>
        <li>
          SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
        </li>
      </div>
      <div
        style={{
          maxWidth: "800px",
          border: " 2px solid #0f172a",
          borderRadius: "50px",
        }}
        className="mx-auto p-5 mb-3"
        data-aos="fade-up"
      >
        <h2 style={{ color: "#F05454" }}>
          What is the purpose of JWT and how does it work?
          <hr />
        </h2>
        <h4 style={{ color: "#0F3460" }}>
          JSON Web Token : <hr />
        </h4>

        <p style={{ wordSpacing: "2px" }}>
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed. JWTs can be signed using a
          secret (with the HMAC algorithm) or a public/private key pair using
          RSA or ECDSA. Although JWTs can be encrypted to also provide secrecy
          between parties, we will focus on signed tokens. Signed tokens can
          verify the integrity of the claims contained within it, while
          encrypted tokens hide those claims from other parties. When tokens are
          signed using public/private key pairs, the signature also certifies
          that only the party holding the private key is the one that signed it.
        </p>
        <h4 style={{ color: "#0F3460" }}>
          How does it work : <hr />
        </h4>
        <p style={{ wordSpacing: "2px" }}>
          In authentication, when the user successfully logs in using their
          credentials, a JSON Web Token will be returned. Since tokens are
          credentials, great care must be taken to prevent security issues. In
          general, you should not keep tokens longer than required. You also
          should not store sensitive session data in browser storage due to lack
          of security. Whenever the user wants to access a protected route or
          resource, the user agent should send the JWT, typically in the
          Authorization header using the Bearer schema.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
