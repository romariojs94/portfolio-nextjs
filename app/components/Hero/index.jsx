"use client";

import styles from "./hero.module.scss";
import { useState, useEffect } from 'react';

export default function Hero() {
	const [windowsWidth, setWindowsWidth] = useState(0);

	useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, [])

	const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
      return [...Array(nbOfBlocks).keys()].map((_, index) => {
        return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
    });
  }

	const colorize = (el) => {
    el.style.backgroundColor = '#000000'
    setTimeout( () => {
      el.style.backgroundColor = 'transparent';
    }, 300)
  }

  return (
    <main className={styles.container}>
      <div className={styles.body}>
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">Desenvolvedor Full-Stack && UX/UI Designer</h1>
				<blockquote className="text-[#949494] text-sm sm:text-lg md:text-2xl mb-11">“Choose a job you love, and you will never have to work a day in your
        life.” ― Confucius</blockquote>
      </div>

			<div className={styles.grid}>
				{
					windowsWidth > 0 && [...Array(20).keys()].map( (_, index) => {
						return <div key={'b_' + index} className={styles.column}>	
								{
									getBlocks()
								}
						</div>
					})
				}
			</div>
    </main>
  );
}
