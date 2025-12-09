import { Car, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">CNH Fácil SP</span>
            </div>
            <p className="text-sm text-gray-400">
              Assessoria especializada no novo processo de habilitação CNH do Brasil.
              Simplificamos sua jornada para a carteira de motorista.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                São Paulo Capital
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                contato@cnhfacilsp.com.br
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-denatran/cnh-do-brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  CNH do Brasil - Gov.br
                </a>
              </li>
              <li>
                <a
                  href="https://www.detran.sp.gov.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Detran SP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CNH Fácil SP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
