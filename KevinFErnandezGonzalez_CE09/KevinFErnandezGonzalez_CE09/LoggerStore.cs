using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace KevinFErnandezGonzalez_CE09
{
    class LoggerStore : Logger
    {
        static string files = @"\..\..\..\..\..\Desktop\KevinFErnandezGonzalez_CE09\KevinFErnandezGonzalez_CE09\StoreFiles\";
        string buildData = "";

        public override void LogToCart(string item, string customer)
        {
            WriteInTxt($"{customer} has put item:{item} in cart");
        }

        public override void LogToStore(string item, string customer)
        {
            WriteInTxt($" {customer} has put item:{item} in Store");
        }


        public override void LogG(string log)
        {
            WriteInTxt(log);
        }


        public void WriteInTxt(string writeInTxt)
        {
            if (!Directory.Exists(files+"StoreFiles"))
            {
                Directory.CreateDirectory(files + "StoreFile");
            }
            File.Delete(files + @"StoreFile\storeActivity.txt");
            using (StreamWriter outStream = new StreamWriter(files+@"StoreFile\storeActivity.txt"))
            {
               
                    buildData += $"{++lineNumber}: {writeInTxt}  \n";
                    outStream.WriteLine(buildData);
               
            }
        }
    }
}
