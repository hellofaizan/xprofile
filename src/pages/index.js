import React from "react";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Card from "../components/Card";
import LoadingCard from "../components/LoadingCard";
import ThemeContext from "@/ThemeContext";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "@/components/Spinner";

const Home = () => {
	const [search, setSearch] = useState(false);
	const [data, setData] = useState([]);
	const [uiTheme, setUiTheme] = useState("");
	const [allUsers, setAllUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const { toggleTheme, theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		if (!theme && localStorage.getItem("theme")) {
			setTheme(localStorage.getItem("theme"));
		} else if (!localStorage.getItem("theme")) {
			setTheme("dark");
		} else {
			setUiTheme(theme);
		}
		localStorage.setItem("theme", theme);
	}, [theme, setTheme]);

	useEffect(() => {
		if (localStorage.getItem("theme")) {
			setTheme(localStorage.getItem("theme"));
			let UItheme = createTheme({ type: localStorage.getItem("theme") });
			setUiTheme(UItheme);
		} else {
			let UItheme = createTheme({ type: "dark" });
			setUiTheme(UItheme);
		}
	}, [theme, setTheme]);

	useEffect(() => {
		fetchAllUsers();
	}, []);

	const fetchAllUsers = async () => {
		try {
			setLoading(true);
			const response = await fetch(`/api/explore?count=9`);
			const apiData = await response.json();
			const getAllUsers = await fetch(`/api/explore`);
			const allUsers = await getAllUsers.json();
			setAllUsers(allUsers);
			setLoading(false);
			setData(apiData);
		} catch (error) {
			console.error("Error fetching all users:", error);
		}
	};

	const fetchMoreData = () => {
		try {
			setTimeout(async () => {
				const response = await fetch(
					`/api/explore?_start=${data.length}&count=${data.length + 10}`
				);
				const apiData = await response.json();
				setData((data) => [...data, ...apiData]);
			}, 500);
		} catch (error) {
			console.error("Error while fetching more data", error);
		}
	};

	return (
		<>
			<NextUIProvider theme={uiTheme}>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.2 }}
				>
					<header className="">
						<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
							<div className="flex h-16 items-center justify-between">
								<div className="md:flex md:items-center md:gap-12">
									<div className="block">
										<span className="sr-only">Home</span>
										<Image
											src={
												theme == "dark" ? "/x_large.png" : "/x_logo_dark.png"
											}
											alt="Logo"
											width={40}
											height={40}
											priority
										/>
									</div>
								</div>
								<div className="hidden sm:block">
									<form className="flex items-center w-80">
										<label htmlFor="simple-search" className="sr-only">
											Search
										</label>
										<div className="relative w-full">
											<input
												type="text"
												onChange={(e) => setSearch(e.target.value)}
												id="simple-search"
												className={`border border-gray text-sm rounded-lg block shadow w-full pl-3 p-2.5  ${
													theme == "light" ? "bg-white" : "bg-[#0e0e0e]"
												}  border-gray-600 placeholder-gray-400 ${
													theme == "dark" ? "text-white" : "text-black"
												} focus:ring-blue-500 focus:border-blue-500`}
												placeholder="Search by Name or Username..."
												required
											></input>
										</div>
									</form>
								</div>
								<div className="flex items-center gap-1 sm:gap-4">
									<div className="sm:flex items-center sm:gap-2">
										<button
											onClick={toggleTheme}
											target="_blank"
											rel="noopener noreferrer"
											className={`rounded-md bg-[#0e0e0e] ${
												theme == "dark"
													? "text-white hover:bg-gray-600"
													: "bg-white hover:bg-gray-300 text-black"
											} border border-gray-600 px-3 py-2.5 text-sm font-medium  shadow`}
										>
											{theme == "dark" ? (
												<i className="bi bi-moon-fill"></i>
											) : (
												<i className="bi bi-sun-fill"></i>
											)}
										</button>
										<Link
											href={"https://x.com/hellofaizaan"}
											target="_blank"
											rel="noopener noreferrer"
											className={`rounded-md bg-[#0e0e0e] ${
												theme == "dark"
													? "text-white hover:bg-gray-600"
													: "bg-white hover:bg-gray-300 text-black"
											} border hidden sm:block border-gray-600 px-4 py-2.5 text-sm font-bold shadow`}
										>
											𝕏
										</Link>
										<Link
											href={"https://github.com/hellofaizan"}
											target="_blank"
											rel="noopener noreferrer"
											className={`rounded-md bg-[#0e0e0e] ${
												theme == "dark"
													? "text-white hover:bg-gray-600"
													: "bg-white hover:bg-gray-300 text-black"
											} border hidden sm:block border-gray-600 px-4 py-2.5 text-sm font-medium shadow`}
										>
											<i className="bi bi-github"></i>
										</Link>
										<Link
											href={"https://discord.com/invite/vUHMxPvege"}
											target="_blank"
											rel="noopener noreferrer"
											className={`rounded-md bg-[#0e0e0e] ${
												theme == "dark"
													? "text-white hover:bg-gray-600"
													: "bg-white hover:bg-gray-300 text-black"
											} border hidden sm:block border-gray-600 px-4 py-2.5 text-sm font-medium  shadow`}
										>
											<i className="bi bi-discord"></i>
										</Link>
										<Link
											className={`rounded-md bg-[#0e0e0e] ${
												theme == "dark"
													? "text-white hover:bg-gray-600"
													: "bg-white hover:bg-gray-300 text-black"
											} border border-gray-600 hidden  sm:block px-4 py-2.5 text-sm font-medium shadow`}
											href="https://github.com/hellofaizan/xprofile"
											target="_blank"
											rel="noopener noreferrer"
											title="Add your 𝕏 (Twitter) Profile to this list :)"
										>
											Contribute ⭐
										</Link>
									</div>
									<div className="block sm:hidden">
										<form className="items-center flex">
											<label htmlFor="simple-search" className="sr-only">
												Search
											</label>
											<div className="relative w-full">
												<input
													type="text"
													onChange={(e) => setSearch(e.target.value)}
													id="simple-search"
													className={`border border-gray text-sm rounded-lg block w-full pl-3 p-2.5  ${
														theme == "light" ? "bg-white" : "bg-[#0e0e0e]"
													}  border-gray-600 placeholder-gray-400 ${
														theme == "dark" ? "text-white" : "text-black"
													} focus:ring-blue-500 shadow focus:border-blue-500`}
													placeholder="Search user profile..."
													required
												></input>
											</div>
											<Link
												href={"https://github.com/hellofaizan/xprofile"}
												className={`rounded-md bg-[#0e0e0e] ${
													theme == "dark"
														? "text-white hover:bg-gray-600"
														: "bg-white hover:bg-gray-300 text-black"
												} border border-gray-600 px-3 ml-1 py-2.5 text-sm font-medium  shadow`}
											>
												⭐
											</Link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</header>

					<>
						<InfiniteScroll
							dataLength={data?.length}
							next={fetchMoreData}
							hasMore={allUsers?.length > data?.length ? true : false}
							loader={<Spinner />}
							endMessage={
								<p
									style={{
										textAlign: "center",
										padding: "15px",
										fontWeight: "bold",
										letterSpacing: "0.5px",
									}}
								>
									You are end of list
								</p>
							}
						>
							<div className="pb-5">
								<div className="flex flex-col mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
									<div className="grid grid-cols-1 gap-4 py-4 ">
										<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
											{loading ? (
												<LoadingCard number={9} />
											) : (
												data
													.filter((user) => {
														if (search == "") {
															return user;
														} else if (
															user.name
																.toLowerCase()
																.includes(search.toLowerCase()) ||
															user.username
																.toLowerCase()
																.includes(search.toLowerCase())
														) {
															return user;
														}
													})
													.map((user, index) => (
														<Card
															key={index}
															user={user}
															bannerColor={user.banner_color}
															name={user.name}
															username={user.username}
															github={user.github}
															about={user.about}
														/>
													))
											)}
										</div>
									</div>
								</div>
							</div>
						</InfiniteScroll>
					</>
				</motion.div>
			</NextUIProvider>
		</>
	);
};

export default Home;
