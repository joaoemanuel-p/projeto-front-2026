import { useForm } from "react-hook-form";

import "./RequerimentoForm.css";

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    reset();
  }

  function handleCancelar() {
    reset();
  }

  return (
    <div className="requerimento-form">
      <h2>Novo Requerimento</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Tipo de Requerimento</label>

          <select
            {...register("tipo", {
              required:
                "O tipo de requerimento é obrigatório",
            })}
          >
            <option value="">
              Selecione um tipo...
            </option>

            <option value="revisao">
              Revisão de Menção
            </option>

            <option value="dispensa">
              Dispensa
            </option>

            <option value="trancamento">
              Trancamento
            </option>

            <option value="mudanca-turno">
              Mudança de turno
            </option>

            <option value="renovacao">
              Renovação
            </option>
          </select>

          {errors.tipo && (
            <p className="error">
              {errors.tipo.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Descrição</label>

          <textarea
            {...register("descricao", {
              required:
                "A descrição é obrigatória",

              minLength: {
                value: 10,
                message:
                  "A descrição deve ter no mínimo 10 caracteres",
              },
            })}
          />

          {errors.descricao && (
            <p className="error">
              {errors.descricao.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Data do Requerimento</label>

          <input
            type="text"
            value="26/05/2026"
            readOnly
          />
        </div>

        <div className="buttons">
          <button
            type="button"
            onClick={handleCancelar}
          >
            Cancelar
          </button>

          <button type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequerimentoForm;