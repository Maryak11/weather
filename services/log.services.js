import chalk from "chalk"

export const printError = (textError) => {
	console.log(chalk.bgRed(" ERROR ") + " " + textError)
}
export const printHelp = () => {
	console.log(`${chalk.bgCyan(" HELP ")}
  Без параматеров - вывод погоды
  -s [CITY] для установки города
  -h длы вывода помощи
  -t [API_KEY] для сохранения токена 
  `)
}
export const printSucess = (textError) => {
	console.log(chalk.bgGreen(" SUCESS ") + " " + textError)
}

export const printWeather = (
	city,
	{ temp_min, temp_max, feels_like, humidity }
) => {
	console.log(`Погода в городе ${city}:
  Ощущается как: ${feels_like}
  Минимальная температура: ${temp_min}
  Максимальная температура: ${temp_max}
  Влажность:${humidity}
  `)
}
