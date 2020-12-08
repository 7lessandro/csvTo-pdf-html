const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const PDFWriter = require("./PDFWriter")

var Leitor = new Reader()
var Escritor = new Writer()

async function main() {
    var dados = await Leitor.Read('./pokemon-go.csv')
    
    var dadosProcessados = Processor.Process(dados)

    var pokemons = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(pokemons)

    Escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)

    /*console.log(pokemons.RowCount)
    console.log(pokemons.ColumnCount)*/

}

main()