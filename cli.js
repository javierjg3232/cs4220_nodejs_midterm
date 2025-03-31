import { searchAPI, getHistory, viewBookmarks, searchAPIbyID} from './app.js';

const args = process.argv.slice(2);

function showHelp(){
    console.log(`
        Usage: node cli.js <command> [options]

        Commands:
        search <keyword>    Search for a keyword using the API
        search --id <id>    Get Detailed data for an item by its Unique ID
        history keywords    Show past searched keywords
        history selections  Show past selected search results
        bookmarks           View and manage saved bookmarks
        --help              Display this help menu
    `);
}

// Command line handling
(async () => {
    if (args.length === 0 || args[0] === '--help') {
        showHelp();
    } else if (args[0] === 'search') {
        const option = args[1]
        const value = args[2]
        if (option === '--id') {
            await searchAPIbyID(value)
        }
        else {
            await searchAPI(option);
        }
    } else if (args[0] === 'history' && (args[1] === 'keywords' || args[1] === 'selections')) {
        await getHistory(args[1]);
    } else if (args[0] === 'bookmarks') {
        await viewBookmarks();
    } else {
        console.error("Invalid command. Run 'node cli.js --help' for usage");
    }
})();