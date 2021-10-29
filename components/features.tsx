/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Push to Deploy', icon: CloudUploadIcon },
    { name: 'SSL Certificates', icon: LockClosedIcon },
    { name: 'Simple Queues', icon: RefreshIcon },
    { name: 'Advanced Security', icon: ShieldCheckIcon },
    { name: 'Powerful API', icon: CogIcon },
    { name: 'Database Backups', icon: ServerIcon },
  ]
  
 const FeaturesTable = () => {
    return (
      <div className="relative bg-transparent py-16 sm:py-16 lg:py-16">
        <div className="mx-auto max-w-lg px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-purple-600 uppercase">FEATURES</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Herramientas para que comiences a monetizar desde el día uno
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-900 rounded-xl px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-xl shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                      <p className="mt-2 text-base text-gray-500    ">
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
              
    export default FeaturesTable;
  