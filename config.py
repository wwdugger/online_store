import pymongo
import certifi

con_str = "mongodb+srv://wdugger:Bella#123@cluster0.qpfkstb.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())

db = client.get_database("fitfood")