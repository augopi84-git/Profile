use std::time::Instant;

#[derive(Debug, Clone)]
pub struct BacktestReport {
    pub total_ticks_processed: usize,
    pub simulated_trades: usize,
    pub win_rate_percentage: f64,
    pub cumulative_pnl: f64,
    pub execution_time_micros: u128,
    pub throughput_ticks_per_sec: f64,
}

#[derive(Debug, Clone)]
pub struct ParticleMatrixReport {
    pub particle_count: usize,
    #[allow(dead_code)]
    pub simulation_steps: usize,
    pub total_vector_calculations: usize,
    pub execution_time_micros: u128,
    pub calculations_per_millisecond: f64,
}

/// High-speed Algorithmic Trading Simulation
/// Demonstrates Rust's sub-millisecond execution for financial backtesting.
pub fn run_trading_simulation(ticks: usize) -> BacktestReport {
    let start = Instant::now();
    let mut price = 100.0f64;
    let mut fast_ema = price;
    let mut slow_ema = price;
    let fast_alpha = 2.0 / (12.0 + 1.0);
    let slow_alpha = 2.0 / (26.0 + 1.0);

    let mut position = 0; // 0: none, 1: long, -1: short
    let mut entry_price = 0.0f64;
    let mut cumulative_pnl = 0.0f64;
    let mut simulated_trades = 0;
    let mut winning_trades = 0;

    // Deterministic pseudo-random price series (LCG algorithm for zero-dependency portability)
    let mut lcg_state: u64 = 0x123456789abcdef0;
    for _ in 0..ticks {
        lcg_state = lcg_state.wrapping_mul(6364136223846793005).wrapping_add(1442695040888963407);
        let delta = ((lcg_state >> 32) as i32 % 100) as f64 / 150.0;
        price = (price + delta).max(10.0);

        fast_ema = fast_alpha * price + (1.0 - fast_alpha) * fast_ema;
        slow_ema = slow_alpha * price + (1.0 - slow_alpha) * slow_ema;

        // Fast EMA crossover signal
        if fast_ema > slow_ema && position <= 0 {
            if position == -1 {
                let pnl = entry_price - price;
                cumulative_pnl += pnl;
                simulated_trades += 1;
                if pnl > 0.0 { winning_trades += 1; }
            }
            position = 1;
            entry_price = price;
        } else if fast_ema < slow_ema && position >= 0 {
            if position == 1 {
                let pnl = price - entry_price;
                cumulative_pnl += pnl;
                simulated_trades += 1;
                if pnl > 0.0 { winning_trades += 1; }
            }
            position = -1;
            entry_price = price;
        }
    }

    let elapsed = start.elapsed();
    let execution_time_micros = elapsed.as_micros().max(1);
    let win_rate_percentage = if simulated_trades > 0 {
        (winning_trades as f64 / simulated_trades as f64) * 100.0
    } else {
        0.0
    };
    let throughput_ticks_per_sec = (ticks as f64 / elapsed.as_secs_f64()).max(1.0);

    BacktestReport {
        total_ticks_processed: ticks,
        simulated_trades,
        win_rate_percentage,
        cumulative_pnl,
        execution_time_micros,
        throughput_ticks_per_sec,
    }
}

/// N-Body / Matrix Vector Math Simulation
/// Demonstrates high-throughput memory-safe physics calculations.
pub fn run_particle_simulation(particles: usize, steps: usize) -> ParticleMatrixReport {
    let start = Instant::now();
    let mut positions: Vec<[f32; 3]> = Vec::with_capacity(particles);
    let mut velocities: Vec<[f32; 3]> = Vec::with_capacity(particles);

    for i in 0..particles {
        let f = i as f32;
        positions.push([f.sin() * 100.0, f.cos() * 100.0, (f * 0.5).sin() * 50.0]);
        velocities.push([0.0, 0.0, 0.0]);
    }

    let mut total_calcs = 0;
    let dt = 0.016f32;

    for _ in 0..steps {
        for i in 0..particles {
            let mut ax = 0.0f32;
            let mut ay = 0.0f32;
            let mut az = 0.0f32;
            let p_i = positions[i];

            for j in 0..particles {
                if i != j {
                    let p_j = positions[j];
                    let dx = p_j[0] - p_i[0];
                    let dy = p_j[1] - p_i[1];
                    let dz = p_j[2] - p_i[2];
                    let dist_sq = dx * dx + dy * dy + dz * dz + 0.1;
                    let inv_dist_cube = 1.0 / (dist_sq * dist_sq.sqrt());
                    ax += dx * inv_dist_cube;
                    ay += dy * inv_dist_cube;
                    az += dz * inv_dist_cube;
                    total_calcs += 1;
                }
            }

            velocities[i][0] += ax * dt;
            velocities[i][1] += ay * dt;
            velocities[i][2] += az * dt;

            positions[i][0] += velocities[i][0] * dt;
            positions[i][1] += velocities[i][1] * dt;
            positions[i][2] += velocities[i][2] * dt;
        }
    }

    let elapsed = start.elapsed();
    let execution_time_micros = elapsed.as_micros().max(1);
    let calculations_per_millisecond = total_calcs as f64 / (execution_time_micros as f64 / 1000.0);

    ParticleMatrixReport {
        particle_count: particles,
        simulation_steps: steps,
        total_vector_calculations: total_calcs,
        execution_time_micros,
        calculations_per_millisecond,
    }
}
