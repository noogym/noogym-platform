import { comparison, plans } from "@/data/plans";
import { formatKz } from "@/lib/utils";

export function PlanComparison() {
  return (
    <div className="glass overflow-x-auto rounded-lg p-6">
      <div className="mb-5 max-w-3xl">
        <h2 className="text-2xl font-bold">Compare os planos</h2>
        <p className="mt-2 text-sm leading-6 text-white/58">
          Os benefícios Noogym são fixos por plano, mas o valor final acompanha o ginásio, a modalidade e as condições comerciais do parceiro.
        </p>
      </div>
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="text-white">
          <tr>
            <th className="py-3">Recurso</th>
            {plans.map((plan) => <th key={plan.name} className={`py-3 text-center ${plan.popular ? "text-limebrand" : ""}`}>{plan.name}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-white/70">
          {comparison.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => <td key={cell + index} className={`py-3 ${index > 0 ? "text-center" : ""} ${index === 2 ? "font-bold text-limebrand" : ""}`}>{cell}</td>)}
            </tr>
          ))}
          <tr className="text-lg font-black text-white">
            <td className="py-4">Preço base</td>
            {plans.map((plan) => (
              <td key={plan.name} className={`py-4 text-center ${plan.popular ? "text-limebrand" : ""}`}>
                A partir de {formatKz(plan.priceFrom)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
