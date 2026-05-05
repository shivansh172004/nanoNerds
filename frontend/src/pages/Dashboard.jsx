import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice.js";
import api from "../api/config.js";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not logged in
useEffect(() => {
  const token = localStorage.getItem("token");
  if (!user && !token) {
    navigate("/login");
  }
}, [user, navigate]);
  // Fetch data based on role
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.role === "admin") {
          // Admin fetches all members
          const res = await api.get("/members/all");
          setMembers(res.data.data || []);
          setStats({
            totalMembers: res.data.count || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchData();
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className={`min-h-screen py-10 px-4 ${
      darkMode ? "bg-gray-900" : "bg-gray-50"
    }`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              {user.role === "admin" ? "🛠️ Admin Dashboard" : "👤 My Dashboard"}
            </h1>
            <p className={`mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Welcome back, <span className="font-semibold text-blue-500">{user.name}</span>!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>

        {/* Role Badge */}
        <div className="mb-8">
          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
            user.role === "admin"
              ? "bg-purple-100 text-purple-700"
              : user.role === "moderator"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}>
            Role: {user.role.toUpperCase()}
          </span>
        </div>

        {/* ── USER DASHBOARD ── */}
        {user.role === "user" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Card */}
            <div className={`p-6 rounded-xl shadow ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                My Profile
              </h2>
              <div className="space-y-3">
                <ProfileRow label="Name" value={user.name} darkMode={darkMode} />
                <ProfileRow label="Email" value={user.email} darkMode={darkMode} />
                <ProfileRow label="Role" value={user.role} darkMode={darkMode} />
              </div>
            </div>

            {/* Quick Links */}
            <div className={`p-6 rounded-xl shadow ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                Quick Actions
              </h2>
              <div className="space-y-3">
                <QuickLink
                  label="Take a Quiz"
                  desc="Test your ECE knowledge"
                  onClick={() => navigate("/quiz")}
                  color="blue"
                />
                <QuickLink
                  label="View Resources"
                  desc="Study materials & notes"
                  onClick={() => navigate("/resources")}
                  color="green"
                />
                <QuickLink
                  label="Meet the Team"
                  desc="See who runs NanoNerds"
                  onClick={() => navigate("/team")}
                  color="purple"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── ADMIN DASHBOARD ── */}
        {(user.role === "admin" || user.role === "moderator") && (
          <div className="space-y-8">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Total Applications"
                value={stats?.totalMembers ?? "—"}
                icon="📋"
                darkMode={darkMode}
              />
              <StatCard
                title="Your Role"
                value={user.role.toUpperCase()}
                icon="🔑"
                darkMode={darkMode}
              />
              <StatCard
                title="Status"
                value="Active"
                icon="✅"
                darkMode={darkMode}
              />
            </div>

            {/* Members Table */}
            <div className={`p-6 rounded-xl shadow ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                Member Applications
              </h2>

              {loading ? (
                <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                  Loading...
                </p>
              ) : members.length === 0 ? (
                <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                  No applications yet.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className={darkMode ? "text-gray-400" : "text-gray-500"}>
                        <th className="text-left py-2 px-3">Name</th>
                        <th className="text-left py-2 px-3">Email</th>
                        <th className="text-left py-2 px-3">Year</th>
                        <th className="text-left py-2 px-3">Branch</th>
                        <th className="text-left py-2 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members.map((m, i) => (
                        <tr key={i} className={`border-t ${
                          darkMode ? "border-gray-700 text-gray-300" : "border-gray-100 text-gray-700"
                        }`}>
                          <td className="py-2 px-3">{m.name}</td>
                          <td className="py-2 px-3">{m.email}</td>
                          <td className="py-2 px-3">{m.year}</td>
                          <td className="py-2 px-3">{m.branch}</td>
                          <td className="py-2 px-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              m.status === "active"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                              {m.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Helper Components ──

function ProfileRow({ label, value, darkMode }) {
  return (
    <div className="flex justify-between">
      <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        {label}
      </span>
      <span className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
        {value}
      </span>
    </div>
  );
}

function StatCard({ title, value, icon, darkMode }) {
  return (
    <div className={`p-6 rounded-xl shadow text-center ${
      darkMode ? "bg-gray-800" : "bg-white"
    }`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className={`text-2xl font-bold mb-1 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}>
        {value}
      </div>
      <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        {title}
      </div>
    </div>
  );
}

function QuickLink({ label, desc, onClick, color }) {
  const colors = {
    blue: "bg-blue-50 hover:bg-blue-100 text-blue-700",
    green: "bg-green-50 hover:bg-green-100 text-green-700",
    purple: "bg-purple-50 hover:bg-purple-100 text-purple-700",
  };
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg transition ${colors[color]}`}
    >
      <p className="font-semibold">{label}</p>
      <p className="text-xs opacity-70">{desc}</p>
    </button>
  );
}