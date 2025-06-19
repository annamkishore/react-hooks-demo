'use client'

import {useEffect, useState} from "react";

export default function LazyHelloComp() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {setLoaded(true);}, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loaded ? "Hello" : "(wait 2 secs)"}</>
}
