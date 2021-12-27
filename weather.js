#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { saveKeyValue, getKeyValue } from "./services/storage.service.js"
import {
	printError,
	printHelp,
	printSucess,
	printWeather,
} from "./services/log.services.js"
import { getWeather } from "./services/api.js"

export const DIC = {
	token: "token",
	city: "city",
}

const saveToken = async (token) => {
	if (!token.length) {
		printError("Не передан токен")
		return
	}
	try {
		await saveKeyValue(DIC.token, token)
		printSucess("Токен сохранен")
		console.log(token)
	} catch (e) {
		printError(e)
	}
}
const getWea = async () => {
	try {
		const city = procces.env.CITY ?? (await getKeyValue(DIC.city))
		const data = await getWeather(city)
		await saveKeyValue(DIC.city, token)
		printWeather(city, data)
	} catch (e) {
		if (e?.response?.status == 404) {
			printError("Неверно указан город")
		} else if (e?.response?.status == 401) {
			printError("Неверно указан токен")
		} else {
			printError(e.message)
		}
	}
}

const initCLI = () => {
	const args = getArgs(process.argv)

	if (args.h) {
		printHelp()
	}
	if (args.c) {
		getWea(args.c)
	}
	if (args.t) {
		saveToken(args.t)
	}
}

initCLI()
