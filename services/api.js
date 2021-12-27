import https from "https"
import { getKeyValue } from "./storage.service.js"
import axios from "axios"
import { DIC } from "../weather.js"

export const getWeather = async (city) => {
	const token = await getKeyValue("token")
	if (!token) {
		throw new Error("Не задан ключ API, задайте его через команду -t")
	}
	const data = await axios.get(
		"https://api.openweathermap.org/data/2.5/weather",
		{
			params: {
				q: city,
				appid: token,
				lang: "ru",
				units: "metric",
			},
		}
	)
	return data.data.main
}
