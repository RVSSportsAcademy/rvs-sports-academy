"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Users,
  UserRound,
} from "lucide-react";

export type TrainingScheduleProps =
  SliceComponentProps<Content.TrainingScheduleSlice>;

const TrainingSchedule = ({
  slice,
}: TrainingScheduleProps): JSX.Element => {
  return (
    <section
      className="bg-slate-50 py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            {slice.primary.subtitle}
          </p>

          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            {slice.primary.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {slice.primary.description?.[0]?.text}
          </p>
        </motion.div>

        {/* Schedule */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {slice.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Day */}

              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-7 w-7 text-primary" />

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.day}
                  </h3>
                </div>

                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Session
                </span>
              </div>

              {/* Time */}

              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />

                <span className="font-medium text-slate-700">
                  {item.time}
                </span>
              </div>

              {/* Program */}

              <div className="mb-4 rounded-2xl bg-blue-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Program
                </p>

                <h4 className="mt-2 text-lg font-bold text-slate-900">
                  {item.program}
                </h4>
              </div>

              {/* Age */}

              <div className="mb-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />

                <span className="text-slate-700">
                  {item.age_group}
                </span>
              </div>

              {/* Coach */}

              <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <UserRound className="h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Coach
                  </p>

                  <p className="font-semibold text-slate-900">
                    {item.coach}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSchedule;