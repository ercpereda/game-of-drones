using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GoD.Web.Api.Models
{
    public class DeclareWinnerBindingModel
    {
        [Required]
        public string Player1Name { get; set; }
        [Required]
        public string Player2Name { get; set; }
        [Required]
        public int Player1Score { get; set; }
        [Required]
        public int Player2Score { get; set; }
    }
}