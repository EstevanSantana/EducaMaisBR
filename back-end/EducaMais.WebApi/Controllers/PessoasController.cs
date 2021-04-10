using EducaMais.Domain;
using EducaMais.Repository;
using EducaMais.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http.Results;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EducaMais.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private readonly IPessoaService _pessoaService;

        public PessoasController(IPessoaService pessoaService)
        {
            _pessoaService = pessoaService;
        }

        // GET: api/<Pessoa>
        [HttpGet]
        public ActionResult<IEnumerable<Pessoa>> Get()
        {
            try
            {
                var pessoas = _pessoaService
                                .ObterPessoas()
                                    .AsQueryable()
                                        .ToList(); 

                return pessoas;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                     "Erro ao tentar obter conexão com o banco de dados!");
            }
        }

        // GET api/<Pessoa>/5
        [HttpGet("{id}", Name = "GetByIdPessoa")]
        public async Task<ActionResult<Pessoa>> Get(int id)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var pessoa = _pessoaService.ObterPessoaPorId(id);

                if (pessoa == null)
                    return NotFound($"A pessoa com o id {id} não foi encontrada");

                return await pessoa;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Erro ao tentar obter conexão com o banco de dados!");
            }
        }

        // POST api/<Pessoa>
        [HttpPost]
        public async Task<IActionResult> Post(Pessoa pessoa)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);
                
                await _pessoaService.AdicionarPessoa(pessoa);

                return new CreatedAtRouteResult("GetByIdPessoa",
                    new { id = pessoa.Id }, pessoa);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,
                    "Erro ao tentar criar uma pessoa");
            }

        }

        // PUT api/<Pessoa>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Pessoa pessoa)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);
                
                if (id != pessoa.Id)
                    return BadRequest($"Não é possivel atualizar a pessoa com o id {id}");
                
                await _pessoaService.AlterarPessoa(pessoa);

                return Ok($"Pessoa com o id {pessoa.Id} atualizada com sucesso");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,
                    $"Erro ao tentar atualizar Pessoa com o id {id} ");
            }
        }

        // DELETE api/<Pessoa>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var pessoa = _pessoaService.ObterPessoaPorId(id);

                if (pessoa == null)
                    return NotFound($"A cadegoria com o id {id} não foi achada");

                await _pessoaService.DeletarPessoa(id);

                return StatusCode(StatusCodes.Status203NonAuthoritative);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,
                    $"Erro ao deletar a categoria com o id {id}");
            }
        }
    }
}
