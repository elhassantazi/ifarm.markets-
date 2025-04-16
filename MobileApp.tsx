import React, { useState } from 'react';
import { 
  Beef, Map, Wallet, LayoutDashboard, 
  BookOpen, Bell, ChevronRight, TrendingUp,
  User, Home, X, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileApp = () => {
  const [currentTab, setCurrentTab] = useState('home');
  const [showNotification, setShowNotification] = useState(false);

  const showSuccessNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="w-[390px] h-[844px] bg-gray-50 relative overflow-hidden">
      {/* Status Bar */}
      <div className="h-12 bg-white px-4 flex items-center justify-between">
        <div className="text-sm">9:41</div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-3 bg-black rounded-sm"></div>
          <div className="text-sm">100%</div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <Beef className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">AgriPay</span>
            <span className="text-xs text-gray-500">Making Agriculture Profitable for Everyone</span>
          </div>
        </div>
        <button 
          onClick={showSuccessNotification}
          className="relative"
        >
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Balance Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-gray-600 mb-2">Solde disponible</div>
          <div className="text-3xl font-bold">5,000 DHS</div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="bg-primary text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-primary-dark transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>Investir</span>
            </button>
            <button className="border-2 border-primary text-primary px-4 py-3 rounded-xl font-medium hover:bg-primary/5 transition-colors">
              Recharger
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <QuickActionCard
            icon={<Map className="h-6 w-6 text-primary" />}
            title="Carte"
            subtitle="Explorer les opportunités"
          />
          <QuickActionCard
            icon={<BookOpen className="h-6 w-6 text-primary" />}
            title="Ordres"
            subtitle="Voir le carnet d'ordres"
          />
        </div>

        {/* Recent Investments */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Mes investissements</h2>
            <button className="text-primary text-sm font-medium">Voir tout</button>
          </div>
          <div className="space-y-3">
            <InvestmentCard
              type="cattle"
              id="V-1432"
              shares={5}
              value={2500}
              profit={12.5}
            />
            <InvestmentCard
              type="dairy"
              id="L-789"
              shares={3}
              value={1500}
              profit={-2.1}
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between">
          <NavButton
            icon={<Home className="h-6 w-6" />}
            label="Accueil"
            active={currentTab === 'home'}
            onClick={() => setCurrentTab('home')}
          />
          <NavButton
            icon={<Map className="h-6 w-6" />}
            label="Carte"
            active={currentTab === 'map'}
            onClick={() => setCurrentTab('map')}
          />
          <NavButton
            icon={<LayoutDashboard className="h-6 w-6" />}
            label="Dashboard"
            active={currentTab === 'dashboard'}
            onClick={() => setCurrentTab('dashboard')}
          />
          <NavButton
            icon={<User className="h-6 w-6" />}
            label="Profil"
            active={currentTab === 'profile'}
            onClick={() => setCurrentTab('profile')}
          />
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-primary text-white px-4 py-3 rounded-xl shadow-lg flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5" />
              <span>Nouvel investissement disponible !</span>
            </div>
            <button onClick={() => setShowNotification(false)}>
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QuickActionCard = ({ icon, title, subtitle }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-4">
    <div className="bg-primary/10 p-3 rounded-xl">
      {icon}
    </div>
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  </div>
);

const InvestmentCard = ({ type, id, shares, value, profit }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <div className="flex justify-between items-start">
      <div className="flex items-center space-x-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          {type === 'cattle' ? '🐄' : type === 'poultry' ? '🐔' : '🥛'}
        </div>
        <div>
          <div className="font-medium">{id}</div>
          <div className="text-sm text-gray-500">{shares} actions</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-medium">{value} DHS</div>
        <div className={`text-sm ${profit >= 0 ? 'text-primary' : 'text-red-600'}`}>
          {profit >= 0 ? '+' : ''}{profit}%
        </div>
      </div>
    </div>
  </div>
);

const NavButton = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center space-y-1 ${
      active ? 'text-primary' : 'text-gray-400'
    }`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

export default MobileApp;