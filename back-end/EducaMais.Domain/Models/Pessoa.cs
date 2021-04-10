using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EducaMais.Domain
{
    [Table("Pessoas")]
    public class Pessoa
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Campo obrigatório.")]
        [MaxLength(80)]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Campo obrigatório.")]
        [DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
        public string DataNascimento { get; set; }
        [Required(ErrorMessage = "Campo obrigatório.")]
        [MaxLength(30)]
        public string Email { get; set; }
        [Required(ErrorMessage = "Campo obrigatório.")]
        [MaxLength(20)]
        public string Telefone { get; set; }
        [Required(ErrorMessage = "Campo obrigatório.")]
        [MaxLength(20)]
        public string Cpf { get; set; }
    }
}
