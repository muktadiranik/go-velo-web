import React from "react";
import { client } from "/graphql/apolloClient";
import NestedLayout from "../components/NestedLayout";
import { getPrivacyAndPolicy } from "../common/queries/privacy-policy";
import { createMarkup } from "../common/hooks/createMarkup";

const PrivacyPolicy = ({ privacies }) => {
  return (
    <NestedLayout>
      <div>
        <div className="grid grid-cols-12  mb-24">
          <div className="col-span-full">
            <h1 className="text-4xl"> {privacies?.privacyPolicy[0]?.title}</h1>
            <div
              className="mt-10 text-[#7F7F7F]"
              dangerouslySetInnerHTML={createMarkup(
                privacies?.privacyPolicy[0]?.content
              )}></div>
          </div>
        </div>
      </div>
    </NestedLayout>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: getPrivacyAndPolicy,
  });
  return {
    props: {
      privacies: data,
    },
  };
}

export default PrivacyPolicy;
