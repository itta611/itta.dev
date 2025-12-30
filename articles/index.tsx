import Article001, { metadata as meta001 } from "./article-001";
import Article002, { metadata as meta002 } from "./article-002";
import Article003, { metadata as meta003 } from "./article-003";
import Article004, { metadata as meta004 } from "./article-004";
import Article005, { metadata as meta005 } from "./article-005";
import Article006, { metadata as meta006 } from "./article-006";
import Article007, { metadata as meta007 } from "./article-007";
import Article008, { metadata as meta008 } from "./article-008";
import Article009, { metadata as meta009 } from "./article-009";
import Article010, { metadata as meta010 } from "./article-010";
// import Article011, { metadata as meta011 } from "./article-011";
// import Article012, { metadata as meta012 } from "./article-012";
// import Article013, { metadata as meta013 } from "./article-013";
// import Article014, { metadata as meta014 } from "./article-014";
// import Article015, { metadata as meta015 } from "./article-015";
// import Article016, { metadata as meta016 } from "./article-016";
// import Article017, { metadata as meta017 } from "./article-017";
// import Article018, { metadata as meta018 } from "./article-018";
// import Article019, { metadata as meta019 } from "./article-019";
// import Article020, { metadata as meta020 } from "./article-020";

export type Article = {
  Component: React.ComponentType;
  metadata: {
    title: string;
    button?: string;
    buttonIcon?: React.ComponentType;
  };
};

export const articles: Article[] = [
  // { Component: Article001, metadata: meta001 },
  // { Component: Article002, metadata: meta002 },
  // { Component: Article003, metadata: meta003 },
  // { Component: Article004, metadata: meta004 },
  // { Component: Article005, metadata: meta005 },
  { Component: Article006, metadata: meta006 },
  // { Component: Article007, metadata: meta007 },
  // { Component: Article008, metadata: meta008 },
  // { Component: Article009, metadata: meta009 },
  // { Component: Article010, metadata: meta010 },
  // { Component: Article011, metadata: meta011 },
  // { Component: Article012, metadata: meta012 },
  // { Component: Article013, metadata: meta013 },
  // { Component: Article014, metadata: meta014 },
  // { Component: Article015, metadata: meta015 },
  // { Component: Article016, metadata: meta016 },
  // { Component: Article017, metadata: meta017 },
  // { Component: Article018, metadata: meta018 },
  // { Component: Article019, metadata: meta019 },
  // { Component: Article020, metadata: meta020 },
];
