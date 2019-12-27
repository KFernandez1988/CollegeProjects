using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KevinFErnandezGonzalez_CE09
{
    abstract class Logger : ILog
    {
        protected static int lineNumber = 0;
        protected static string currentcus = "";

        abstract public void LogToCart(string item, string customer);

        abstract public void LogToStore(string item, String customer);


        abstract public void LogG(string log);
        
        virtual public string CurrentCus
        {
            get {

                if (string.IsNullOrEmpty(currentcus))
                {
                    return "There no one log in store";
                }
                else
                {
                    return currentcus + " is log in store";
                }
            }
            set { currentcus = value; }
        }
        
    }
}
