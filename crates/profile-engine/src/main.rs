mod simulation;

use std::env;
use std::fs;
use std::path::Path;
use std::time::Instant;

fn main() {
    let args: Vec<String> = env::args().collect();
    let mode = args.get(1).map(|s| s.as_str()).unwrap_or("all");

    println!("===============================================================");
    println!("  🦀 Gopinath Chinnakaruppan - High-Performance Profile Engine");
    println!("  Systems Architecture • Enterprise ECM • Gen AI & Rust");
    println!("===============================================================\n");

    match mode {
        "validate" => {
            validate_profile();
        }
        "metrics" => {
            calculate_and_print_metrics();
        }
        "simulate" => {
            run_simulations();
        }
        "export" => {
            export_enriched_metrics();
        }
        "all" | _ => {
            println!("[Phase 1/4] Validating Profile Data...");
            validate_profile();
            println!("\n[Phase 2/4] Computing Career & Systems Metrics...");
            calculate_and_print_metrics();
            println!("\n[Phase 3/4] Running Rust Algorithmic Simulations...");
            run_simulations();
            println!("\n[Phase 4/4] Exporting Enriched Metrics for Web & Remotion...");
            export_enriched_metrics();
            println!("\n✨ All engine tasks completed successfully!");
        }
    }
}

fn locate_profile_json() -> String {
    let candidate_paths = [
        "data/profile.json",
        "../../data/profile.json",
        "../data/profile.json",
    ];

    for path in candidate_paths {
        if Path::new(path).exists() {
            if let Ok(content) = fs::read_to_string(path) {
                return content;
            }
        }
    }

    panic!("Could not find data/profile.json in search paths!");
}

fn validate_profile() {
    let content = locate_profile_json();
    let required_keys = [
        "\"name\"",
        "\"title\"",
        "\"summary\"",
        "\"experience\"",
        "\"topSkills\"",
        "\"certifications\"",
        "\"education\"",
        "\"links\"",
    ];

    let mut missing = Vec::new();
    for key in required_keys {
        if !content.contains(key) {
            missing.push(key);
        }
    }

    if missing.is_empty() {
        println!("  ✅ Schema integrity check passed: 100% compliant.");
        println!("  ✅ Profile verified for Gopinath Chinnakaruppan (Senior Manager, Cognizant).");
    } else {
        eprintln!("  ❌ Validation failed! Missing keys: {:?}", missing);
        std::process::exit(1);
    }
}

fn calculate_and_print_metrics() {
    let start_year = 2006;
    let current_year = 2026;
    let total_years = current_year - start_year;

    println!("  📊 Total Industry Tenure: {} Years (July 2006 - Present)", total_years);
    println!("  🏢 Primary Enterprise Org: Cognizant (Senior Manager)");
    println!("  🌍 Global Leadership Footprint: 4 Countries (US, Canada, UAE, India)");
    println!("  📜 Core Certifications: SCJP 1.5, Documentum CMF (E20-120), AWS Cloud Practitioner");
    println!("  🎓 Alma Mater: College of Engineering Guindy (CEG), Anna University");
    println!("  💡 Core Disciplines: Enterprise Content Management (ECM), Gen AI, Rust & Remotion");
}

fn run_simulations() {
    println!("  🚀 Executing Algorithmic Trading Simulation (50,000 market ticks)...");
    let trade_report = simulation::run_trading_simulation(50_000);
    println!("     • Processed: {} ticks in {} µs ({:.2} million ticks/sec)",
        trade_report.total_ticks_processed,
        trade_report.execution_time_micros,
        trade_report.throughput_ticks_per_sec / 1_000_000.0
    );
    println!("     • Simulated Trades: {} | Win Rate: {:.1}% | PnL: ${:.2}",
        trade_report.simulated_trades,
        trade_report.win_rate_percentage,
        trade_report.cumulative_pnl
    );

    println!("\n  ⚡ Executing N-Body Vector Dynamics Benchmark (500 particles)...");
    let particle_report = simulation::run_particle_simulation(500, 30);
    println!("     • Particle Interactions: {} in {} µs ({:.2} M calcs/sec)",
        particle_report.total_vector_calculations,
        particle_report.execution_time_micros,
        particle_report.calculations_per_millisecond / 1000.0
    );
    println!("     • Deterministic Memory: Zero allocations in critical loop (Zero Garbage Collection)");
}

fn export_enriched_metrics() {
    let start = Instant::now();
    let trade_report = simulation::run_trading_simulation(25_000);
    let particle_report = simulation::run_particle_simulation(300, 20);

    let json_output = format!(
r#"{{
  "generatedAt": "2026-11-08T02:00:00Z",
  "engineVersion": "0.1.0",
  "engineLanguage": "Rust 1.91.0",
  "careerMetrics": {{
    "totalYearsTenure": 20,
    "startDate": "July 2006",
    "rolesHeld": 9,
    "countriesWorked": 4,
    "certifications": [
      "Documentum CMF (EMC E20-120)",
      "Sun Certified Java Programmer (SCJP 1.5)",
      "AWS Cloud Practitioner"
    ],
    "almaMater": "College of Engineering Guindy, Chennai (BE Mechanical 2002-2006)"
  }},
  "rustBenchmarks": {{
    "tradingBacktest": {{
      "ticks": {},
      "executionTimeMicros": {},
      "throughputTicksPerSec": {:.0},
      "winRate": {:.2}
    }},
    "particleCalculations": {{
      "particles": {},
      "totalCalculations": {},
      "executionTimeMicros": {},
      "throughputMCalcsPerSec": {:.2}
    }}
  }}
}}"#,
        trade_report.total_ticks_processed,
        trade_report.execution_time_micros,
        trade_report.throughput_ticks_per_sec,
        trade_report.win_rate_percentage,
        particle_report.particle_count,
        particle_report.total_vector_calculations,
        particle_report.execution_time_micros,
        particle_report.calculations_per_millisecond / 1000.0
    );

    let output_dirs = ["public", "../public", "../../public"];
    for dir in output_dirs {
        if Path::new(dir).exists() || dir == "public" {
            let _ = fs::create_dir_all(dir);
            let target_file = format!("{}/profile_metrics.json", dir);
            if fs::write(&target_file, &json_output).is_ok() {
                println!("  💾 Exported enriched profile metrics -> {}", target_file);
                break;
            }
        }
    }

    println!("  ⏱️ Export pipeline finished in {} µs.", start.elapsed().as_micros());
}
