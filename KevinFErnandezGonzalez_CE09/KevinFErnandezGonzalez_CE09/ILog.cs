using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KevinFErnandezGonzalez_CE09
{
    interface ILog
    {

        void LogToCart(string item, String customer);

        void LogToStore(string item, String customer);

        void LogG(string log);
    }
}
