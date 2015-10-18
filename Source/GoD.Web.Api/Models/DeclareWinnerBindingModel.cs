using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GoD.Web.Api.Models
{
    public class DeclareWinnerBindingModel
    {
        public string Player1Name { get; set; }
        public string Player2Name { get; set; }
        public int Player1Score { get; set; }
        public int Player2Score { get; set; }
    }
}