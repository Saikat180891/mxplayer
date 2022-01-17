import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Label from "../components/Label";
import TypeAhead from "../components/TypeAhead";
import { searchByQuery, getCategories } from "../services/search.service";
import React from "react";
import Badges from "../components/Badges";
import Router, { useRouter } from "next/router";
import SearchPlaceholder from "../components/SearchPlaceholder";

export default function Home({ initialSugesstions = [] }) {
  const router = useRouter();
  const [sugesstions, setSugessions] = React.useState(initialSugesstions);
  const [category, setCategory] = React.useState([]);
  const [selectedTab, setSelectedTab] = React.useState(0);

  React.useEffect(() => {
    console.log("Sugession", sugesstions);
  }, [sugesstions]);

  const handleQueryChange = (searchQuery = "") => {
    const options = { shallow: true };
    const query = searchQuery ? { q: encodeURIComponent(searchQuery) } : {};
    const pathname = "/";
    router.replace(
      {
        pathname,
        query,
      },
      undefined,
      options
    );
    const searchPromise = searchByQuery({ query: searchQuery });
    const categoryPromise = getCategories();
    const allPromise = [searchPromise];
    if (searchQuery) allPromise.push(categoryPromise)
    Promise.all(allPromise).then(
      ([searchResponse, categoryResponse]) => {
        if (searchResponse.data) {
          setSugessions(searchResponse.data);
        } else {
          setSugessions([]);
        }

        if (categoryResponse?.data) {
          setCategory(categoryResponse.data);
        } else {
          setCategory([]);
        }
      }
    );
  };

  const handleSearch = (searchTerm = "") => {
    if (searchTerm.length > 2) {
      handleQueryChange(searchTerm);
    } else if (!searchTerm) {
      handleQueryChange("");
    }
  };

  return (
    <div className={styles.container}>
      <SearchPlaceholder
        showPlaceholder={sugesstions.length > 0 ? true : false}
      />
      <TypeAhead
        sugession={sugesstions.length > 0 ? sugesstions[0].query : ""}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Label>
        Type to search or pick a recent search or suggested keywords below
      </Label>
      {sugesstions.length > 0 && (
        <div className={styles.BadgesContainer}>
          {sugesstions.map((sugesstion) => (
            <Badges key={sugesstion.exact_query}>{sugesstion.query}</Badges>
          ))}
        </div>
      )}
      {category.length > 0 && (
        <div className={styles.tabPanel}>
          <div className={styles.tabs}>
            {category.map((cat, i) => (
              <div
                onClick={() => setSelectedTab(i)}
                className={`${styles.tab} ${selectedTab === i && styles.tabActive
                  }`}
                key={cat.tabName}
              >
                {cat.tabName}
              </div>
            ))}
          </div>
          <div className={styles.thumbnailsContainer}>
            {category[selectedTab].movies.map((video) => (
              <div className={styles.thumbnails}>
                <img src={video.img} />
                <span>{video.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = async ({ req, query }) => {
  const q = query.q;
  let initialSugesstions = [];
  try {
    const data = await searchByQuery({ query: q });
    if (data.success) initialSugesstions = data.data;
  } catch (err) {
    console.log("Some error has occured");
  }

  return {
    props: {
      initialSugesstions,
    },
  };
};
